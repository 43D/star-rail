
type props = {
    originalText: string;
    params: number[] | null;
    id: string;
}

export const HTMLParagraphConvertEidolons = ({ originalText, params, id }: props) => {
    if (!originalText)
        return (<></>);

    const formattedText = originalText
        .replace(/<color=(#[0-9a-fA-F]{8})>/g, (_, colorHex) => `<span style="color: ${colorHex}">`)
        .replace(/<\/color>/g, '</span>')
        .replace(/<unbreak>#(\d+)\[i\]%<\/unbreak>/g, (_, id) => {
            return `<strong>${params ? (params[id-1] * 100).toFixed(0) : "uééé"}% </strong>`;
        })
        .replace(/<unbreak>#(\d+)\[i\]<\/unbreak>/g, (_, id) => {

            return `<strong>${params ? params[id-1] : "uééé"}</strong>`;
        })
        .replace(/<unbreak>#(\d+)\[f(\d+)\]<\/unbreak>/g, (_, id, decimalPlaces) => {
            return `<strong>${params ? (params[id-1].toFixed(decimalPlaces)) : "uééé"}</strong>`;
        })
        .replace(/<unbreak>#(\d+)\[f(\d+)\]%<\/unbreak>/g, (_, id, decimalPlaces) => {
            return `<strong>${params ? (params[id-1] * 100).toFixed(decimalPlaces) : "uééé"}%</strong>`;
        });

    return (<>
        <div>
            {formattedText.split("\\n").map((txt, index) =>
                <p key={`skill-${id}-txt-index-${index}`} dangerouslySetInnerHTML={{ __html: txt }} />
            )}
        </div>
    </>)
};
