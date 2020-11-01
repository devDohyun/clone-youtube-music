<template>
    <div class="album-item">
        <div
            :style="{'background-image': `url(${albumThumb})`}"
            class="album-thumb"
        >
            <div class="album-overlay"></div>
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
                    opacity: 0.5;
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

            color: #AAAAAA;
        }
        .album-overlay {
            position: absolute;

            width: 100%;
            height: 100%;

            background-color: black;
            opacity: 0;

            transition: opacity 0.2s ease;
        }
    }
</style>

<script>
export default {
    data () {
        return {
            albumThumb: this.thumb,
            albumTitle: this.title,
            albumDesc: this.desc
        }
    },
    props: {
        thumb: {},
        title: {
            required: true
        },
        desc: {}
    }
}
</script>