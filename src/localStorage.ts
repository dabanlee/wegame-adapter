export default {
    // @ts-ignore
    get length() {
        const { keys } = wx.getStorageInfoSync()
        return keys.length
    },

    key(key: string) {
        const { keys } = wx.getStorageInfoSync()

        return keys[key]
    },

    getItem(key: string) {
        const value = wx.getStorageSync(key);
        return value === "" ? null : value;
    },

    setItem(key: string, value: string) {
        return wx.setStorageSync(key, value)
    },

    removeItem(key: string) {
        return wx.removeStorageSync(key)
    },

    clear() {
        return wx.clearStorageSync()
    }
}
