export const formatName = (name) => {
    return name
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.toUpperCase())
        .join(' ');
};

export const formatPrice = (price) => {
    return price.toLocaleString('vi-VN');
};
