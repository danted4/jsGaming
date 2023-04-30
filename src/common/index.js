export const freeze = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

export const unfreeze = () => {
    document.getElementsByTagName('body')[0].style.overflowX = 'hidden';
}

export const PUBLIC_URL = "/jsGaming/public";