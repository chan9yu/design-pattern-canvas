import { ChromeGrimpan, GrimpanBase, IEGrimpan } from "./Grimpan";
import { ChromeGrimpanHistory, GrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory";
import { ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu";

export interface GrimpanFactory {
	createGrimpan(canvas: HTMLCanvasElement): GrimpanBase;
	createGrimpanMenu(grimpan: GrimpanBase): GrimpanMenu;
	createGrimpanHistory(grimpan: GrimpanBase): GrimpanHistory;
}

export abstract class AbstractGrimpanFactory implements GrimpanFactory {
	public abstract createGrimpan(canvas: HTMLCanvasElement): GrimpanBase;
	public abstract createGrimpanMenu(grimpan: GrimpanBase): GrimpanMenu;
	public abstract createGrimpanHistory(grimpan: GrimpanBase): GrimpanHistory;
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
	private static instance: ChromeGrimpanFactory | null = null;

	private constructor() {
		super();
	}

	public static getInstance() {
		if (!ChromeGrimpanFactory.instance) {
			ChromeGrimpanFactory.instance = new ChromeGrimpanFactory();
		}

		return ChromeGrimpanFactory.instance;
	}

	public override createGrimpan(canvas: HTMLCanvasElement) {
		return ChromeGrimpan.getInstance(canvas);
	}

	public override createGrimpanMenu(grimpan: GrimpanBase) {
		if (!(grimpan instanceof ChromeGrimpan)) {
			throw new Error("ChromeGrimpanMenu requires ChromeGrimpan instance");
		}

		return ChromeGrimpanMenu.getInstance(grimpan);
	}

	public override createGrimpanHistory(grimpan: GrimpanBase) {
		if (!(grimpan instanceof ChromeGrimpan)) {
			throw new Error("ChromeGrimpanHistory requires ChromeGrimpan instance");
		}

		return ChromeGrimpanHistory.getInstance(grimpan);
	}
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
	private static instance: IEGrimpanFactory | null = null;

	private constructor() {
		super();
	}

	public static getInstance() {
		if (!IEGrimpanFactory.instance) {
			IEGrimpanFactory.instance = new IEGrimpanFactory();
		}

		return IEGrimpanFactory.instance;
	}

	public override createGrimpan(canvas: HTMLCanvasElement) {
		return IEGrimpan.getInstance(canvas);
	}

	public override createGrimpanMenu(grimpan: GrimpanBase) {
		if (!(grimpan instanceof IEGrimpan)) {
			throw new Error("IEGrimpanMenu requires IEGrimpan instance");
		}

		return IEGrimpanMenu.getInstance(grimpan);
	}

	public override createGrimpanHistory(grimpan: GrimpanBase) {
		if (!(grimpan instanceof IEGrimpan)) {
			throw new Error("IEGrimpanHistory requires IEGrimpan instance");
		}

		return IEGrimpanHistory.getInstance(grimpan);
	}
}
