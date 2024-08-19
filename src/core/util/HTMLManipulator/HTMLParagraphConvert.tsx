
type props = {
    originalText: string;
    params: {
        [key: string]: number[];
    };
    lvl: number;
    id: string;
}

export const HTMLParagraphConvert = ({ originalText, params, lvl, id }: props) => {
    if (!originalText)
        return (<></>);

    const formattedText = originalText
        .replace(/<color=(#[0-9a-fA-F]{8})>/g, (_, colorHex) => `<span style="color: ${colorHex}">`)
        .replace(/<\/color>/g, '</span>')
        .replace(/<unbreak>#(\d+)\[i\]%<\/unbreak>/g, (_, id) => {
            return `<strong>${(params[id][lvl] * 100)}%</strong>`;
        })
        .replace(/<unbreak>#(\d+)\[i\]<\/unbreak>/g, (_, id) => {

            return `<strong>${params[id][lvl]}</strong>`;
        })
        .replace(/<unbreak>#(\d+)\[f(\d+)\]<\/unbreak>/g, (_, id, decimalPlaces) => {
            return `<strong>${(params[id][lvl].toFixed(decimalPlaces))}</strong>`;
        })
        .replace(/<unbreak>#(\d+)\[f(\d+)\]%<\/unbreak>/g, (_, id, decimalPlaces) => {
            return `<strong>${(params[id][lvl] * 100).toFixed(decimalPlaces)}%</strong>`;
        });

    return (<>
        <div>
            {formattedText.split("\\n").map((txt, index) =>
                <p key={`skill-${id}-txt-index-${index}`} dangerouslySetInnerHTML={{ __html: txt }} />
            )}
        </div>
    </>)
};
