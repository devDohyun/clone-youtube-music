export const state = () => ({
    isPlaying: false,
    currentSeconds: 0,
    playIndex: null,
    playlist: []
})

export const getters = {
    getPlayIndex: state => state.playIndex,
    getIsPlaying: state => state.isPlaying,
    getCurrentMusic: state => state.playlist[state.playIndex],
    getPlaylist: state => state.playlist
}

export const mutations = {
    addItemInPlaylist: (state, item) => state.playlist.push(item),
    setPlayIndex: (state, index) => state.playIndex = index,
    setIsPlaying: (state, boolIsPlaying) => state.isPlaying = boolIsPlaying
}

export const actions = {
    addItemsInPlaylist: ({ commit, state }, payload) => {
        if (!payload) return
        if (Array.isArray(payload)) payload.forEach((item) => commit('addItemInPlaylist', item))
        if (typeof payload === 'object') commit('addItemInPlaylist', payload)

        // Add after api cache available
        // if (typeof payload === 'string') 

        return state.playlist.length - 1
    }
}