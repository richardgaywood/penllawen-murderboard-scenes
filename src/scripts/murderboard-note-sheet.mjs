// cribbed from https://github.com/mordachai/investigation-board/blob/main/scripts/investigation-board.js#L29
import {CONSTANTS} from "./constants.mjs";


export class MurderboardNoteSheet extends DrawingConfig {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["text_drawing_sheet"],
        template: `modules/${CONSTANTS.moduleName}/templates/murderboard-note-sheet.hbs`,
        width: 400,
        height: "auto",
        title: "Note Configuration", 
      });
    }
  
    getData(options) {
      const data = super.getData(options);
      data.text = this.object.text;
      return data;
    }
    
  
    async _updateObject(event, formData) {
      const updates = {
        text: formData.text        
      };
      await this.object.update(updates);
      // const drawing = canvas.drawings.get(this.object.id);
      // if (drawing) drawing.refresh();
    }
  }

  Hooks.once("init", () => {
    DocumentSheetConfig.registerSheet(
        DrawingDocument, 
        CONSTANTS.moduleName, 
        MurderboardNoteSheet, 
        {
            label: "Murderboard Note Sheet",
            //types: ["base"],
            makeDefault: false,
        }
    );
    console.log("Murderboard Scenes module initialized.");
});