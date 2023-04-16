export const freeze = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

export const unfreeze = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

export const PUBLIC_URL = false ? "/public" : "/jsGaming/public";