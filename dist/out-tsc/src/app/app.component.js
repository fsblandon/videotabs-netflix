import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'videotabs';
        this.showVideos = false;
        this.listVideos = [
            { name: 'coaster', url: 'https://www.youtube.com/embed/OPdbdjctx2I' },
            { name: 'professor', url: 'https://www.youtube.com/embed/9KhJO4UloIE' },
            { name: 'dunk', url: 'https://www.youtube.com/embed/1jil38FcTTY' },
            { name: 'giant', url: 'https://www.youtube.com/embed/0Hkef4IQvoM' }
        ];
    }
    ngOnInit() { }
    mouseOver(index, event) {
        console.log(event);
        console.log(this.videoref);
        this.videoref.nativeElement.show;
        this.showVideos = true;
        this.idx = index;
        return this.idx;
    }
    mouseLeave(event) {
        console.log(event);
    }
};
__decorate([
    ViewChild('video', { static: false })
], AppComponent.prototype, "videoref", void 0);
__decorate([
    ViewChild('videoframe', { static: false })
], AppComponent.prototype, "videoframe", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map