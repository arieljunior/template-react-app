import path from "path";

const configCraco = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
};

export default configCraco;
