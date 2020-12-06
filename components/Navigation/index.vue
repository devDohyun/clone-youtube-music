<template>
    <div id="navigation" :class="{ 'nav-background': navBackground }">
        <nuxt-link to="/" class="logo"><div class="logo-youtube-music">Music</div></nuxt-link>
        <div class="nav-menu">
            <nuxt-link to="/" class="menu-item">홈</nuxt-link>
            <nuxt-link to="/explore" class="menu-item">둘러보기</nuxt-link>
            <nuxt-link to="/library" class="menu-item menu-library">보관함</nuxt-link>
            <div class="menu-item">검색</div>
        </div>
        <div class="profile-menu">
            <button
                class="btn-profile"
            >D</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #navigation {
        z-index: 9;
        
        position: fixed;
        left: 0;
        top: 0;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        height: 65px;
        padding: 0 50px;
        
        background-color: transparent;

        text-align: center;

        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;

        &.nav-background {
            background-color: $color_gray2;
        }

        .logo {
            text-decoration: none;
            cursor: pointer;
            .logo-youtube-music {
                color: white;
                font-size: 24px;
                font-weight: 600;
                letter-spacing: -1.5px;
            }
        }

        .nav-menu {
            @media (max-width: $media_sd) {
                display: none;
            }
            .menu-item {
                display: inline-block;

                margin-left: 12.5px;
                margin-right: 12.5px;
                
                font-size: 22px;
                color: #999;
                font-weight: 500;
                text-decoration: none;
                cursor: pointer;

                &.nuxt-link-exact-active, 
                &.menu-library.nuxt-link-active {
                    color: white;
                }
            }
        }

        .profile-menu {
            .btn-profile {
                display: inline-block;

                width: 27.5px;
                height: 27.5px;

                padding: 5px;
                background-color: deepskyblue;
                
                outline: none;
                border: none;
                border-radius: 50%;

                color: white;
                font-weight: 500;

                cursor: pointer;
            }
        }
    }
</style>

<script>
export default {
    data () {
        return {
            navBackground: false
        }
    },
    methods: {
        handleScrollEvent () {
            window.addEventListener('scroll', this.scrollEventListener)
        },
        removeScrollEvent () {
            window.removeEventListener('scroll', this.scrollEventListener)
        },
        scrollEventListener () {
            if (window.scrollY > 65) {
                this.navBackground = true
            } else this.navBackground = false
        }
    },
    mounted () {
        this.handleScrollEvent()
        this.$root.$on('nav-set-background', () => {
            this.navBackground = true
        })
        this.$root.$on('nav-set-transparent', () => {
            this.navBackground = false
        })
    },
    beforeDestroy () {
        this.removeScrollEvent()
    }
}
</script>