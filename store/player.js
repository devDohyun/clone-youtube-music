export const state = () => ({
    isPlaying: false,
    playIndex: null,
    playlist: []
})

export const getters = {
    getPlayIndex: state => state.playIndex,
    getIsPlaying: state => state.isPlaying,
    getCurrent: state => state.playlist[state.playIndex],
    getPlaylist: state => state.playlist
}

export const mutations = {
    addItemInPlaylist: (state, item) => state.playlist.push(item)
}

export const actions = {
    addItemsInPlaylist: ({ commit, state }, payload) => {
        if (!payload) return
        if (Array.isArray(payload)) payload.forEach((item) => commit('addItemInPlaylist', item))
        if (typeof payload === 'object') commit('addItemInPlaylist', payload)

        // Add after api cache available
        // if (typeof payload === 'string') 
    }
}