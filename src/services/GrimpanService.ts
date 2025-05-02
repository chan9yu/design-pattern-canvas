export class GirmpanService {
	private static instance: GirmpanService | null = null;

	private constructor(readonly canvas: HTMLCanvasElement | null) {
		if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
			throw new Error("Canvas element is required");
		}

		console.log("[GirmpanService] create grimpan service instance");
	}

	public static getInstance(canvas: HTMLCanvasElement | null) {
		if (!GirmpanService.instance) {
			GirmpanService.instance = new GirmpanService(canvas);
		}

		return GirmpanService.instance;
	}
}
