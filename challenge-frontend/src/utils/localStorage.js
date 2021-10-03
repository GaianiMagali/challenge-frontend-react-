

export const setItem = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};

export const getItem = (name) => {
    const user = localStorage.getItem(name);
    return JSON.parse(user);
};

export const deleteItem = async (name) => {
    localStorage.removeItem(name);
};

