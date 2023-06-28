import { Detail } from "@raycast/api"
import { execSync } from "child_process"

export default function Command() {
    let output: string = execSync(`/opt/homebrew/bin/mpc next`, { encoding: "utf8" });
    output = output.substring(0, output.indexOf("[playing]"))
    return (
        <Detail markdown={`**Now Playing:** ${output} \n Refresh (⌘R) to run again`} />
    )
}
