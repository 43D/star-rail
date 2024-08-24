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
                            {(skillData.maxLevel > 1) && <hr />}
                            <div className="d-flex align-items-center">
                                <img src={`https://api.yatta.top/hsr/assets/UI/skill/${skillData.skillList[skillKey].icon}.png`}
                                    alt={skillData.skillList[skillKey].name} style={{ maxHeight: "3rem" }} />
                                <h4 className="ms-2">{skillData.skillList[skillKey].name}</h4>
                            </div>
                            <p className="my-2">{skillData.skillList[skillKey].type}</p>

                            {skillData.skillList[skillKey].skillPoints &&
                                <div className="mb-3">
                                    {skillData.skillList[skillKey].skillPoints.base &&
                                        <div className="d-flex justify-content-between border-bottom">
                                            <div>Energia</div>
                                            <div>
                                                <span className="me-2">Ganhos:</span>
                                                {skillData.skillList[skillKey].skillPoints.base}
                                            </div>
                                        </div>
                                    }
                                    {skillData.skillList[skillKey].skillPoints.need &&
                                        <div className="d-flex justify-content-between border-bottom">
                                            <div>Energia</div>
                                            <div>
                                                <span className="me-2">Custo:</span>
                                                {skillData.skillList[skillKey].skillPoints.need}
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                            {skillData.skillList[skillKey].weaknessBreak &&
                                <div className="mb-3">
                                    {(skillData.skillList[skillKey].weaknessBreak.one) &&
                                        <div className="d-flex justify-content-between border-bottom">
                                            <div>Quebra de Fraqueza</div>
                                            <div>
                                                <span className="me-2">Alvo único:</span>
                                                {skillData.skillList[skillKey].weaknessBreak.one}
                                            </div>
                                        </div>
                                    }
                                    {(skillData.skillList[skillKey].weaknessBreak.spread) &&
                                        <div className="d-flex justify-content-between border-bottom">
                                            <div>Quebra de Fraqueza</div>
                                            <div>
                                                <span className="me-2">Vários alvos:</span>
                                                {skillData.skillList[skillKey].weaknessBreak.spread}
                                            </div>
                                        </div>
                                    }
                                    {(skillData.skillList[skillKey].weaknessBreak.all) &&
                                        <div className="d-flex justify-content-between border-bottom">
                                            <div>Quebra de Fraqueza</div>
                                            <div>
                                                <span className="me-2">Todos os alvos:</span>
                                                {skillData.skillList[skillKey].weaknessBreak.all}
                                            </div>
                                        </div>
                                    }
                                </div>
                            }

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
        </div >
    </>)
}