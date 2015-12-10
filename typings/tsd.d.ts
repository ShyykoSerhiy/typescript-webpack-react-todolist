/// <reference path="material-ui/material-ui.d.ts" />
/// <reference path="react-redux/react-redux.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="redux/redux.d.ts" />
/// <reference path="assertion-error/assertion-error.d.ts" />
/// <reference path="chai/chai.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="react/react-dom.d.ts" />

declare namespace __MaterialUI {
    import React = __React;
    namespace Table {
        interface TableHeaderColumnProps {
            colSpan?: number;
        }

        interface TableRowColumnProps {
            colSpan?: number;
        }
    }
    namespace Styles{
        export function ThemeDecorator(muiTheme: Styles.MuiTheme): ClassDecorator;
    }
}
