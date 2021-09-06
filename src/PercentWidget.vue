<template>
    <!-- Water Chart -->
    <figure class="piechart">
        <div>
        <svg width="200" height="250">
            <circle class="outer" :style="{'stroke-dashoffset': dashoffset}" transform="rotate(-90, 95, 95)" r="82" style="stroke-dashoffset: 0px;" cy="94" cx="101">
            </circle>
        </svg>            <picture class="water">
            <source :srcset="link1" type="image/webp">
            <source :srcset="link2" type="image/png">
            <img :src="link3">
        </picture>
    </div>
            <figcaption>{{percent}}%</figcaption>
    </figure>
</template>

<script>
export default {
    name: 'PercentWidget',
    props: {
        percent: {
            type: Number,
            defaults: 0
        },
        icon: {
            type: String,
            default: "water"
        }
    },
    data() {
        return {
            link1: "https://website.vivaconagua.org/img/"+ this.icon +".webp 1x,https://website.vivaconagua.org/img/"+ this.icon +".webp 2x",
            link2: "https://website.vivaconagua.org/img/"+ this.icon +".png 1x,https://website.vivaconagua.org/img/"+ this.icon +".webp 2x",
            link3: "https://website.vivaconagua.org/img/"+this.icon+".webp"
        }
    },
    computed: {
        dashoffset: function() {
            var offset = 5.34 * (100 - parseInt(this.percent))
            return parseInt(offset, 10)
        }
    },
}
</script>

<style scoped>
.piechart {
    position: relative;
    display: inline-block;
    color: #999;
    font-size: 20px;
    top: 20px;
    text-align: center;
}
figure {
    display: block;
    margin: 0 0 1rem;
}

.piechart figcaption {
    position: relative;
    margin-top: 20px;
    background: white;
}
.piechart img {
    padding: 20px 20px;
    width: 179px;
    border: 15px solid #f0f0f0;
    border-radius: 100%;
    line-height: 0px;
}
.piechart svg {
    position: absolute;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.outer {
    fill: transparent;
    stroke: #007cba;
    stroke-width: 15;
    stroke-dasharray: 534;
    transition: stroke-dashoffset 1s;
    animation-play-state: running;
    -webkit-animation-play-state: running;
    transform: rotate(-89deg) translateX(-190px);
    -moz-transform: rotate(-89deg) translateX(-190px);
    -webkit-animation: show29 2s;
    animation: show29 2s;
}
.piechart:hover .outer {
    stroke-dashoffset: 534 !important;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
}

</style>
