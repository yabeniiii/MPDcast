import { Detail } from "@raycast/api"
import { execSync } from "child_process"

export default function Command() {
    let output: string = execSync("/opt/homebrew/bin/mpc toggle", { encoding: "utf8" });
    if (output.includes("[playing]")) {
        output = `**Playing:** ${output.substring(0, output.indexOf("[playing]"))} \n Refresh (⌘R) to run again`
    } else if (output.includes("[paused]")) {
        output = `**Paused** \n Refresh (⌘R) to run again`
    }
    return (
        <Detail markdown={`${output}`} />
    )
}
