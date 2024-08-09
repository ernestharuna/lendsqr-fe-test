
export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const newDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return newDate;
}