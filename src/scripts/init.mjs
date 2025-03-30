import { log } from "./logger.mjs";
import {changeOwnerOfAllVisibleDrawings, createNote} from "./murderboards.mjs";

export const CONSTANTS = {
    moduleName: "penllawen-murderboard-scenes",
    modulePath: "modules/penllawen-murderboard-scenes/",
    debug: true,
};

Hooks.on("getSceneControlButtons", (controls) => {
    const drawingTools = controls.find((c) => c.name === "drawings");
    if (!drawingTools) return;
    log("Adding button to drawing tools via GetSceneControlButtons hook");
    drawingTools.tools.push(
        //     { name: "createStickyNote", title: "Create Sticky Note", icon: "fas fa-sticky-note", onClick: () => createNote("sticky"), button: true },
        { name: "createIndexCard", title: "Create Index Card", icon: "fa-regular fa-subtitles", onClick: () => createNote(), button: true },
        { name: "changeDrawingsOwner", title: "Change Drawings Owner", icon: "fa-solid fa-people-arrows", onClick: () => changeOwnerOfAllVisibleDrawings(), button: true },
    );
});

Hooks.once("init", () => {
    // registerSettings();
    // CONFIG.Drawing.objectClass = CustomDrawing;
    //
    // DocumentSheetConfig.registerSheet(DrawingDocument, "investigation-board", CustomDrawingSheet, {
    //     label: "Note Drawing Sheet",
    //     types: ["base"],
    //     makeDefault: false,
    // });

    log("Murderboard Scenes module initialized.");
});


