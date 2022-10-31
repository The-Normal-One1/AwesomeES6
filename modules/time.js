// timer
export const displayDate = () => {
    const date = new Date();
    const options = {
      weekday: undefined,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const [month, time] = [
      date.toLocaleDateString(undefined, options),
      date.toLocaleTimeString().toLocaleLowerCase(),
    ];
    document.querySelector('.time').innerHTML = `${month}, ${time}`;
  };