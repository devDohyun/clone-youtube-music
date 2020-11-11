export const state = () => ({
    isPlaying: false,
    currentSeconds: 0,
    playIndex: null,
    playlist: [],

    playerIntervalId: null
})

export const getters = {
    getPlayIndex: state => state.playIndex,
    getIsPlaying: state => state.isPlaying,
    getCurrentSeconds: state => state.currentSeconds,
    getCurrentMusic: state => state.playlist[state.playIndex],
    getPlaylist: state => state.playlist
}

export const mutations = {
    addItemInPlaylist: (state, item) => state.playlist.push(item),
    setPlayIndex: (state, index) => state.playIndex = index,
    setIsPlaying: (state, boolIsPlaying) => state.isPlaying = boolIsPlaying,
    setPlayerIntervalId: (state, id) => state.playerIntervalId = id,
    setCurrentSeconds: (state, seconds) => state.currentSeconds = seconds
}

export const actions = {
    addItemsInPlaylist: ({ commit, state }, payload) => {
        if (!payload) return
        if (Array.isArray(payload)) payload.forEach((item) => commit('addItemInPlaylist', item))
        if (typeof payload === 'object') commit('addItemInPlaylist', payload)

        // Add after api cache available
        // if (typeof payload === 'string') 

        return state.playlist.length - 1
    },
    playMusic: ({ commit, state, getters }) => {
        // check if playing
        if (getters.getIsPlaying) {
            clearInterval(state.playerIntervalId)
            commit('setPlayerIntervalId', null)
            commit('setCurrentSeconds', 0)
        } else commit('setIsPlaying', true)

        const intervalId = setInterval(() => {
            commit('setCurrentSeconds', state.currentSeconds + 1)

            if (state.currentSeconds >= getters.getCurrentMusic.playtime) {
                if (typeof getters.getPlaylist[getters.getPlayIndex + 1] !== 'undefined') {
                    commit('setCurrentSeconds', 0)
                    commit('setPlayIndex', getters.getPlayIndex + 1)
                } else {
                    commit('setCurrentSeconds', 0)
                    clearInterval(state.playerIntervalId)
                    commit('setPlayerIntervalId', null)
                    commit('setIsPlaying', false)
                }
            }
        }, 1000)

        commit('setPlayerIntervalId', intervalId)
    },
    pauseMusic: ({ commit, state }) => {
        clearInterval(state.playerIntervalId)
        commit('setPlayerIntervalId', null)
        commit('setIsPlaying', false)
    }
}