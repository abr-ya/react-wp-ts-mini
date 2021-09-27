declare namespace KmSelectModuleScssNamespace {
  export interface IKmSelectModuleScss {
    box: string;
    buttonGroup: string;
    customButton: string;
    field: string;
    list: string;
    listItem: string;
    moveInput: string;
    multiSelect: string;
    option: string;
    optionBox: string;
    selected: string;
    selectedCount: string;
    textInput: string;
  }
}

declare const KmSelectModuleScssModule: KmSelectModuleScssNamespace.IKmSelectModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: KmSelectModuleScssNamespace.IKmSelectModuleScss;
};

export = KmSelectModuleScssModule;
