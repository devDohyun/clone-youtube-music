<template>
    <div id="page-index">
        <div class="page-container">
            <template
                v-for="(table, tableIdx) in tableListComputed"    
            >
                <music-table
                    :key="tableIdx"
                    :title="table.title"
                    :items="table.items"
                ></music-table>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #page-index {
        .page-container {
            width: 95%;
            max-width: 1200px;

            margin: 0 auto;
            padding-top: 150px;
            padding-bottom: 100px;
        }
    }
</style>

<script>
import MusicTable from '@/components/MusicTable'

export default {
    head () {
		return {
			title: '메인',
		}
	},
    components: {
        MusicTable
    },
    data () {
        return {
            tableList: [
                {
                    title: '즐겨 듣는 음악',
                    items: [
                        {
                            id: 0,
                            type: 'music',
                            title: '흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',
                            desc: '노래•장범준',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/흔들리는-꽃들-속에서-네-샴푸향이-느껴진거야.jpg'
                        },
                        {
                            id: 1,
                            type: 'music',
                            title: '스토커',
                            desc: '노래•10cm(십센치)',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/스토커.jpg'
                        },
                        {
                            id: 2,
                            type: 'music',
                            title: '길',
                            desc: '노래•버스커버스커',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/684015_1_f.jpg'
                        },
                        {
                            id: 23,
                            type: 'mix',
                            title: '속이 뻥 뚫리는 역대급 가창력',
                            desc: '재생목록•YouTube Music',
                            thumb: ''
                        },
                    ]
                }
            ]
        }
    },
    computed: {
        tableListComputed () {
            let result = []

            // Set mock
            result = result.concat(...this.tableList)
            result = result.concat(...this.tableList)
            result = result.concat(...this.tableList)
            
            return result
        }
    }
}
</script>