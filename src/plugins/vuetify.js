import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: { customProperties: true },
		themes: {
			light: {
				primary: {
					base: '#36315b',
					lighten1: "#4a466b",
					lighten2: "#5e5a7c",
					lighten3: "#726f8c",
					lighten4: "#86839d",
					darken1: "#312c52",
					darken2: "#2b2749",
					darken3: "#262240",
					darken4: "#201d37",
				},
				neutral: {
					base: '#8e8991',
					lighten1: "#a5a1a7",
					lighten2: "#bbb8bd",
					lighten3: "#d2d0d3",
					lighten4: "#e8e7e9",
					darken1: "#726e74",
					darken2: "#555257",
					darken3: "#39373a",
					darken4: "#1c1b1d",
				},
				accent: {
					base: '#843B62',
					lighten1: "#904f72",
					lighten2: "#9d6281",
					lighten3: "#a97691",
					lighten4: "#b589a1",
					darken1: "#773558",
					darken2: "#6a2f4e",
					darken3: "#5c2945",
					darken4: "#4f233b",
				},
				error: {
					base: "#E25455",
					lighten1: "#e56364",
					lighten2: "#efa2a2",
					lighten3: "#fae0e0",
					darken1: "#9c1a1b",
					darken2: "#5d1010",
					darken3: "#1f0505"
				},
				warning: {
					base: "#E68E00",
					lighten1: "#FCB849",
					lighten2: "#ffdb92",
					lighten3: "#fff3db",
					darken1: "#b67900",
					darken2: "#6d4900",
					darken3: "#241800"
				},
				success: {
					base: "#47b857",
					lighten1: "#7bcc87",
					lighten2: "#b0e1b7",
					lighten3: "#e5f5e7",
					darken1: "#32843e",
					darken2: "#1e4f25",
					darken3: "#0a1a0c"
				},
			}
		}
	},
});
