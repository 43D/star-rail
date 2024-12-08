import { mainSkillType } from "../../../../../infra/api/iStarRailApi";
import { HTMLParagraphConvert } from "../../../../../core/util/HTMLManipulator/HTMLParagraphConvert";

type props = {
    skillData: mainSkillType;
}

export const TraceSkill = ({ skillData }: props) => {
    if (!skillData.description)
        return;

    return (<>
        <div className="card h-100">
            <div className="card-body">
                {skillData.description && <>
                    <div className="d-flex align-items-center">
                        <img src={`https://api.yatta.top/hsr/assets/UI/skill/${skillData.icon}.png`}
                            alt={skillData.name} style={{ maxHeight: "3rem" }} />
                        <h4 className="ms-2">{skillData.name}</h4>
                    </div>

                    <HTMLParagraphConvert id={skillData.icon}
                        originalText={skillData.description}
                        params={skillData.params}
                        lvl={0} />
                </>}
            </div>
        </div >
    </>)
}