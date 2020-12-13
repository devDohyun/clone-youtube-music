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
            <div @click="handleSearchClick" class="menu-item menu-search">
                <div class="menu-icon"><fa-icon :icon="['fas', 'search']"></fa-icon></div>
                <div class="menu-text">검색</div>
            </div>
        </div>
        <div class="profile-menu">
            <button
                class="btn-profile"
            >D</button>
        </div>
        <div v-show="showSearchBox" class="search-box-wrapper">
            <div class="search-box">
                <button @click="showSearchBox = false" class="btn-close"><fa-icon :icon="['fas', 'arrow-left']"></fa-icon></button>
                <input
                    ref="searchBoxInput"
                    v-model="searchKeyword"
                    @keypress.enter="$event.target.blur(); enterSearch(searchKeyword)"
                    @focus="showListbox = true"
                    type="text"
                    placeholder="검색"
                >
            </div>
            <div v-show="showListbox" class="list-box">
                <div
                    v-for="(li, liIdx) in searchList"
                    :key="`${li.text}${liIdx}`"
                    @click="handleListClick(li.text)"
                    class="list-item"
                >
                    <fa-icon v-if="li.type === 'history'" :icon="['fas', 'history']" class="list-icon"></fa-icon>
                    <fa-icon v-if="li.type === 'suggestion'" :icon="['fas', 'search']" class="list-icon"></fa-icon>
                    <div class="list-text">{{ li.text }}</div>
                </div>
            </div>
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
        padding: 0 25px;
        
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

                &:hover,
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

    .search-box-wrapper {
        position: fixed;

        left: 50%;
        top: 10px;
        transform: translateX(-50%);

        width: 95%;
        max-width: 720px;

        background-color: $color_gray2;

        color: $color_gray8;

        font-size: 16px;

        .search-box {
            display: flex;
            align-items: center;

            height: 48px;

            .btn-close {
                margin: 0 24px;
                padding: unset;

                color: inherit;
                font-size: inherit;

                cursor: pointer;
            }

            input {
                width: calc(100% - 100px);
                
                background-color: transparent;
                border: none;

                color: white;
                font-size: 20px;
                font-weight: 500;
            }
        }

        .list-box {
            .list-item {
                display: flex;
                align-items: center;

                height: 48px;

                cursor: pointer;
                
                .list-icon {
                    margin: 0 24px;
                }
                .list-text {
                    display: inline-block;
                }
            }
        }
    }
</style>
<script>
export default {
    data () {
        return {
            searchHistory: ['장범준', '10cm'],
            searchSuggestion: [],
            navBackground: false,
            showListbox: false,
            showSearchBox: false,
            searchKeyword: ''
        }
    },
    computed: {
        searchList () {
           return [
               ...this.searchHistory.map(item => ({ text: item, type: 'history' })),
               ...this.searchSuggestion.map(item => ({ text: item, type: 'suggestion' }))
           ]
        }
    },
    methods: {
        handleSearchClick () {
            this.showSearchBox = true
            this.$nextTick(() => this.$refs.searchBoxInput.focus())
        },
        handleListClick (text) {
            this.searchKeyword = text
            this.enterSearch(text)
        },
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
        },
        enterSearch (keyword) {
            this.$router.push({
                path: '/search',
                query: {
                    q: keyword
                }
            })

            this.showListbox = false
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