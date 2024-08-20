import { mainSkillType } from "../../../../../infra/api/iStarRailApi";
import { HTMLParagraphConvert } from "../../../../../core/util/HTMLManipulator/HTMLParagraphConvert";
import { useState } from "react";

type props = {
    skillData: mainSkillType;
    id: number;
}

export const CharacterSkill = ({ skillData, id }: props) => {
    if (!skillData.skillList)
        return;

    const skills = Object.keys(skillData.skillList);
    const [lvl, setLvl] = useState<number>(skillData.maxLevel);
    const onChangeLvl = (event: React.ChangeEvent<HTMLInputElement>) => setLvl(Number(event.target.value));

    return (<>
        <div className="card h-100">
            <div className="card-body">
                {(skillData.maxLevel > 1) &&
                    <div className="d-flex align-items-center mb-3">
                        <label htmlFor={`level-skill-id-${id}`} className="form-label mb-0" style={{ minWidth: "60px" }}>Nível {lvl}</label>
                        <input type="range" onChange={onChangeLvl} className="form-range" min="1" max={skillData.skillList[skills[0]].maxLevel} step="1" id={`level-skill-id-${id}`} value={lvl} />
                    </div>
                }
                {skills.map((skillKey, index) =>
                    <div key={`${id}-skills-type-index-${index}`}>
                        {skillData.skillList && <>
                            <hr />
                            <div className="d-flex align-items-center">
                                <img src={`https://api.yatta.top/hsr/assets/UI/skill/${skillData.skillList[skillKey].icon}.png`}
                                    alt={skillData.skillList[skillKey].name} style={{ maxHeight: "3rem" }} />
                                <h4 className="ms-2">{skillData.skillList[skillKey].name}</h4>
                            </div>


                            <HTMLParagraphConvert id={skillData.skillList[skillKey].icon}
                                originalText={skillData.skillList[skillKey].description}
                                params={skillData.skillList[skillKey].params}
                                lvl={lvl - 1} />


                            {skillData.skillList[skillKey].extraEffects?.map((extra, index2) =>
                                <div key={`extra-effect-key-${index}-id-${index2}`}>
                                    <hr />
                                    <h5>{extra.name}</h5>
                                    <p className="mb-0">{extra.description.replace("\\n", " ")}</p>
                                </div>
                            )}
                        </>}
                    </div>
                )}
            </div>
        </div>
    </>)
}