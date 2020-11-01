<template>
    <div id="page-index">
        <template
            v-for="(table, tableIdx) in tableList"    
        >
            <music-table
                :key="tableIdx"
                :title="table.title"
                :items="table.items"
            ></music-table>
        </template>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import MusicTable from '@/components/MusicTable'

export default {
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
                            type: 'music',
                            title: '흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',
                            desc: '노래ㆍ장범준'
                        },
                        {
                            type: 'music',
                            title: '스토커',
                            desc: '노래ㆍ10cm(십센치)'
                        },
                        {
                            type: 'music',
                            title: '길',
                            desc: '노래ㆍ버스커버스커'
                        }
                    ]
                }
            ]
        }
    }
}
</script>