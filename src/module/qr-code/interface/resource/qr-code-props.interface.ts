export type QrCodeLevel = 'L' | 'M' | 'Q' | 'H'
export type QrCodeRender = 'canvas' | 'svg'

export interface QrCodeProps {
    value: string;
    size?: number;
    'render-as'?: QrCodeRender;
    margin?: number;
    level?: QrCodeLevel;
    background?: string;
    foreground?: string;
}