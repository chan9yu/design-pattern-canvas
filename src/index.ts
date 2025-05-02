import { ChromeGrimpanFactory, IEGrimpanFactory } from "./services";

function main() {
	// 디자인 패턴 학습용 코드 - IEGrimpan은 패턴 학습 목적으로만 구현되었으며 실제 기능은 없음
	const isChrome = true;
	const factory = isChrome ? ChromeGrimpanFactory.getInstance() : IEGrimpanFactory.getInstance();
	const mainCanvas = document.querySelector("#main-canvas") as HTMLCanvasElement;

	// 팩토리를 통한 객체 생성
	const grimpan = factory.createGrimpan(mainCanvas);
	const grimpanMenu = factory.createGrimpanMenu(grimpan);
	const grimpanHistory = factory.createGrimpanHistory(grimpan);

	// 각 모듈 초기화
	grimpan.initialize();
	grimpanMenu.initialize();
	grimpanHistory.initialize();
}

main();
