import React from 'react';
import { X } from 'lucide-react';

interface BannerProps {
    title: string;
    description: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    onClose?: () => void;
    backgroundImage?: string;
    overlay?: boolean;
}

const Banner: React.FC<BannerProps> = ({
                                           title,
                                           description,
                                           type = 'info',
                                           onClose,
                                           backgroundImage,
                                           overlay = true
                                       }) => {
    const getBannerStyles = () => {
        if (backgroundImage) {
            return 'text-white';
        }

        switch (type) {
            case 'success':
                return 'bg-green-50 text-green-800 border-green-200';
            case 'warning':
                return 'bg-yellow-50 text-yellow-800 border-yellow-200';
            case 'error':
                return 'bg-red-50 text-red-800 border-red-200';
            default:
                return 'bg-blue-50 text-blue-800 border-blue-200';
        }
    };

    return (
        <div
            className={`px-4 py-8 border relative h-[350px] overflow-hidden flex flex-col items-center justify-center ${getBannerStyles()}`}
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : undefined}
        >
            {backgroundImage && overlay && (
                <div className="absolute inset-0 bg-black/30" />
            )}

            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 p-1 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                    <X className="h-4 w-4" />
                </button>
            )}

            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold mt-4">{title}</h1>
                <p className="text-xl mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Banner;