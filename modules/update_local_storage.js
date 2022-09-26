export let updateLocalStorage = (obj) => {
    const localdata = JSON.stringify(obj);
    localStorage.setItem('localdata', localdata);
}