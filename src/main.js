import Vue from 'vue'
import PercentWidget from './PercentWidget.vue?shadow'
import wrap from '@vue/web-component-wrapper';

const CustomElement = wrap(Vue, PercentWidget);

window.customElements.define('percent-widget', CustomElement);
