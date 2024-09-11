import React, { useState, useEffect, useRef } from 'react';
import { NumberInput } from './Input/NumberInput/NumperInput';
import { Range } from './Input/Range/Range';
import { Progress } from './Progress/Progress';
import { Start } from './Buttons/Start';
import { Reset } from './Buttons/Reset';

type StateType = 'Active' | 'Unactive' | 'Paused';

export const Countdown: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [totalTime, setTotalTime] = useState(0); // Время в секундах
    const [remainingTime, setRemainingTime] = useState(0); // Оставшееся время в секундах
    const [isActive, setIsActive] = useState<StateType>('Unactive');
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // По поводу totalTime, нужно одно состояние для хранения времени чтобы не путаться с синхронизацией секунд и минут

    useEffect(() => {
        const totalInSeconds = minutes * 60 + seconds;
        if (totalInSeconds <= 43200) {
            // Максимум 720 минут
            setTotalTime(totalInSeconds);

            // При инициализации после первого рендера уставливаем remainingTime в totalTime
            // Другим useEffect-ом через интервал просто будем уменьшать значение remainingTime на -1
            setRemainingTime(totalInSeconds);
        } else {
            setTotalTime(43200); // Устанавливаем максимально допустимое время
            setMinutes(720); // Устанавливаем максимальное значение минут
            setSeconds(0); // Сбрасываем секунды
        }
    }, [minutes, seconds]);

    useEffect(() => {
        if (isActive === 'Active' && remainingTime > 0) {
            intervalRef.current = setInterval(() => {
                setRemainingTime(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current!);
                        playSound(); // Звук по окончанию таймера
                        handleReset(); // Сброс состояния UI
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (isActive === 'Paused' || remainingTime === 0) {
            clearInterval(intervalRef.current!);
        }

        return () => clearInterval(intervalRef.current!);
    }, [isActive, remainingTime]);

    const handleStart = () => {
        if (totalTime > 0) {
            if (isActive === 'Unactive' || isActive === 'Paused') {
                setRemainingTime(prev => prev); // Возобновление
                setIsActive('Active');
            } else if (isActive === 'Active') {
                setIsActive('Paused');
            }
        } else {
            alert('Введите время для таймера!');
        }
    };

    const handleReset = () => {
        setIsActive('Unactive');
        setMinutes(0);
        setSeconds(0);
        setRemainingTime(0);
    };

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Audio playback prevented:', error);
            });
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const progress = totalTime > 0 ? ((totalTime - remainingTime) / totalTime) * 100 : 0;

    return (
        <div>
            <NumberInput
                type='number'
                value={minutes}
                min={0}
                max={720}
                onChange={newValue => {
                    if (newValue >= 0 && newValue <= 720) {
                        setMinutes(newValue);
                    }
                }}
            />
            <NumberInput
                type='number'
                value={seconds}
                min={0}
                max={59}
                onChange={newValue => {
                    if (newValue >= 0 && newValue <= 59) {
                        setSeconds(newValue);
                    }
                }}
            />
            <Range
                type='range'
                value={totalTime}
                min={0}
                max={43200} // Максимум 720 минут в секундах
                step={15}
                onChange={value => {
                    setMinutes(Math.floor(value / 60));
                    setSeconds(value % 60);
                }}
            />
            <Progress value={progress} />
            <div>{formatTime(remainingTime)}</div>
            <Start onClick={handleStart} content={isActive === 'Active' ? 'Pause' : 'Start'} />
            <Reset onClick={handleReset} />
            <audio ref={audioRef} src='/countdown.mp3'>
                <track kind='captions'></track>
            </audio>
        </div>
    );
};
