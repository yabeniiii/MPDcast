import { Detail } from "@raycast/api"
import { execSync } from "child_process"

export default function Command() {
    let output = execSync("/opt/homebrew/bin/mpc next", { encoding: "utf8" });
    return (
        <Detail markdown={output} />
    )
}
