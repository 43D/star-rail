import { mainSkillType } from "../../../../../infra/api/iStarRailApi";
import { HTMLParagraphConvert } from "../../../../../core/util/HTMLManipulator/HTMLParagraphConvert";

type props = {
    skillData: mainSkillType;
}

export const CharacterSkill = ({ skillData }: props) => {
    if (!skillData.skillList)
        return;

    const skills = Object.keys(skillData.skillList);

    return (<>
        {skills.map((skillKey, index) =>
            <div className="card h-100" key={index}>
                <div className="card-body">
                    {skillData.skillList && <>
                        <HTMLParagraphConvert id={skillData.skillList[skillKey].icon} originalText={skillData.skillList[skillKey].description}
                            params={skillData.skillList[skillKey].params} lvl={skillData.maxLevel - 1} />
                        {skillData.skillList[skillKey].extraEffects?.map((extra, index2) =>
                            <div key={`extra-effect-key-${index}-id-${index2}`}>
                                <hr />
                                <h6>{extra.name}</h6>
                                <p className="mb-0">{extra.description.replace("\\n", " ")}</p>
                            </div>
                        )}
                    </>}
                </div>
            </div>
        )}
    </>)
}