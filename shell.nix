{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    name = "node";
    buildInputs = with pkgs; [
      nodejs
    ];
    shellHook = ''
      export PATH="$PWD/node_modules/.bin/:$PATH"
      alias run='npm run'
    '';
}
