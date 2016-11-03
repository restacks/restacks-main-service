// flow-typed signature: 8a741378e2bc6b6ca046fb7059018879
// flow-typed version: 94e9f7e0a4/minimist_v1.x.x/flow_>=v0.28.x

declare module 'minimist' {
  declare type minimistOptions = {
    string?: boolean,
    boolean?: boolean,
    alias?: { [arg: string]: string | Array<string> },
    default?: { [arg: string]: any },
    stopEarly?: boolean,
    // TODO: Strings as keys don't work...
    // '--'? boolean,
    unknown?: (param: string) => boolean
  };

  declare type minimistOutput = {
    _: Array<string>,
    [flag: string]: string | boolean
  };

  declare module.exports: (argv: Array<string>, opts?: minimistOptions) => minimistOutput;
}
