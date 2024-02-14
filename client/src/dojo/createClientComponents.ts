import { overridableComponent } from "@dojoengine/recs";
import { SetupNetworkResult } from "./setupNetwork";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
  contractComponents,
}: SetupNetworkResult) {
  return {
    ...contractComponents,
    Board: overridableComponent(contractComponents.Board),
    Ercaallowance: overridableComponent(contractComponents.Ercaallowance),
    Ercbalance: overridableComponent(contractComponents.Ercbalance),
    Ercmeta: overridableComponent(contractComponents.Ercmeta),
    Game: overridableComponent(contractComponents.Game),
    Gate: overridableComponent(contractComponents.Gate),
    Moves: overridableComponent(contractComponents.Moves),
    Players: overridableComponent(contractComponents.Players),
    Fixed: overridableComponent(contractComponents.Fixed),
    Response: overridableComponent(contractComponents.Response)
  };
}
