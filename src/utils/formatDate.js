export const formatDate = (date) => {
    return Intl.DateTimeFormat('en-us', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)))
};