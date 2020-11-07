import { SystemManager } from './manager.js';
import { ActionHandlerSw5e as ActionHandler } from '../actions/sw5e/sw5e-actions.js'
import * as roll from '../rollHandlers/sw5e/sw5e-factory.js';
import * as settings from '../settings/sw5e-settings.js'

export class DemonlordSystemManager extends SystemManager {
    
    constructor(appName) {
        super(appName);
    }

    /** @override */
    doGetActionHandler(filterManager, categoryManager) {
        let actionHandler = new ActionHandler(filterManager, categoryManager);
        return actionHandler;
    }

    /** @override */
    getAvailableRollHandlers() {
        let choices = { 'core': 'Core Star Wars 5e' };

        return choices;
    }

    /** @override */
    doGetRollHandler(handlerId) {
        let handler = roll.getRollHandler(handlerId)

        return handler;
    }

    /** @override */
    doRegisterSettings(appName, updateFunc) {
        settings.register(appName, updateFunc);
    }
}