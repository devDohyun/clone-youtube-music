<template>
    <div id="navigation" :class="{ 'nav-background': navBackground }" ref="nav">
        <nuxt-link to="/" class="logo">
            <div class="logo-full">
                <div class="logo-icon"><fa-icon :icon="['far', 'play-circle']"></fa-icon></div>
                <div class="logo-text">Music</div>
            </div>
        </nuxt-link>
        <div class="nav-menu">
            <nuxt-link to="/" class="menu-item">
                <div class="menu-icon"><fa-icon :icon="['fas', 'home']"></fa-icon></div>
                <div class="menu-text">홈</div>
            </nuxt-link>
            <nuxt-link to="/explore" class="menu-item">
                <div class="menu-icon"><fa-icon :icon="['fas', 'compass']"></fa-icon></div>
                <div class="menu-text">둘러보기</div>
            </nuxt-link>
            <nuxt-link to="/library" class="menu-item menu-library">
                <div class="menu-icon"><fa-icon :icon="['fas', 'file-audio']"></fa-icon></div>
                <div class="menu-text">보관함</div>
            </nuxt-link>
            <div class="menu-item menu-search">
                <div class="menu-icon"><fa-icon :icon="['fas', 'search']"></fa-icon></div>
                <div class="menu-text">검색</div>
            </div>
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

        @media (max-width: $media_sd) {
            padding: 0 25px;
        }        

        &.nav-background {
            background-color: $color_gray2;
        }

        .logo {
            text-decoration: none;
            cursor: pointer;

            .logo-full {
                color: white;

                .logo-icon {
                    vertical-align: middle;
                    
                    display: inline-block;

                    width: 25px;
                    height: 25px;
                    
                    font-size: 18px;

                    background-color: red;
                    border-radius: 50%;
                    
                    line-height: 27px;
                }
                .logo-text {
                    vertical-align: middle;                    
                    
                    display: inline-block;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -1.5px;

                    @media (max-width: $media_sd) {
                        display: none;
                    }
                }
            }
        }

        .nav-menu {
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

                &.menu-search {
                    .menu-text {
                        @media (max-width: $media_md) {
                            display: none;
                        }
                    }
                    .menu-icon {
                        display: inline-block;
                    }
                }

                .menu-text {
                    vertical-align: middle;
                    
                    display: inline-block;
                    
                    @media (max-width: $media_sd) {
                        display: none;
                    }
                }
                .menu-icon {
                    vertical-align: middle;
                    
                    display: inline-block;

                    font-size: 18px;
                    
                    @media (max-width: $media_sd) {
                        font-size: 16px;
                    }
                    @media (min-width: $media_sd) {
                        display: none;
                    }
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
            const targetHeight = this.$refs.nav.offsetHeight * 1.5
            
            if (window.scrollY > targetHeight) {
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