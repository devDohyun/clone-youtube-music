<template>
    <div class="album-item">
        <div
            :style="{'background-image': `url(${albumThumb})`}"
            class="album-thumb"
        >
            <div class="album-overlay">
                <button @click="handleAlbumClick" type="button" class="btn-play">
                    <fa-icon :icon="['fas', 'play']"></fa-icon>
                </button>
            </div>
        </div>
        <div class="album-title">{{ albumTitle }}</div>
        <div class="album-desc">{{ albumDesc }}</div>
    </div>
</template>

<style lang="scss" scoped>
    .album-item {
        vertical-align: top;
        
        display: inline-block;

        width: 180px;

        margin-left: 10px;
        margin-right: 10px;
        
        .album-thumb {
            position: relative;

            width: 100%;    

            margin-bottom: 7.5px;
            padding-bottom: 100%;

            background-color: peru;
            border-radius: 3px;

            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            overflow: hidden;
            cursor: pointer;

            &:hover {
                .album-overlay {
                    opacity: 1;
                }
            }
        }
        .album-title {
            margin-bottom: 3.5px;

            font-size: 14px;

            word-break: keep-all;
            white-space: normal;
            cursor: pointer;
        }
        .album-desc {
            font-size: 14px;

            color: $color_gray3;
        }
        .album-overlay {
            position: absolute;

            width: 100%;
            height: 100%;

            background-color: rgba($color: black, $alpha: 0.35);
            opacity: 0;

            transition: opacity 0.2s ease;

            .btn-play {
                position: absolute;
                right: 17.5px;
                bottom: 17.5px;

                display: block;
                width: 35px;
                height: 35px;
                padding: 0;

                border: none;
                border-radius: 50%;
                outline: none;

                background-color: rgba($color: black, $alpha: 0.5);
                color: white;

                font-size: 14px;

                cursor: pointer;
                transition-property: transform background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;

                &:hover {
                    transform: scale(1.25);
                    background-color: rgba($color: black, $alpha: 0.9);
                }
            }
        }
    }
</style>

<script>
export default {
    data () {
        return {
            albumId: this.id,
            albumThumb: this.thumb,
            albumTitle: this.title,
            albumDesc: this.desc
        }
    },
    props: {
        id: {},
        thumb: {},
        title: {
            required: true
        },
        desc: {}
    },
    methods: {
        async handleAlbumClick () {
            const index = await this.addPlaylist()
            this.$store.commit('player/setPlayIndex', index)
        },
        async addPlaylist () {
            const payload = {
                id: this.id,
                thumb: this.thumb,
                title: this.title,
                desc: this.desc
            }

            return await this.$store.dispatch('player/addItemsInPlaylist', payload)
        }
    }
}
</script>