const covid19ImpactEstimator = (data) => {
    const input = JSON.parse(JSON.stringify(data));
    const impactObj = {};
    const severImpactObj = {};
    const impactResult = impactCalc(input);
    const severeImpactResult = severeImpactCalc(input);
    impactObj.currentlyInfected = impactResult.currentlyInfected;
    impactObj.infectionsByRequestedTime = impactResult.InfectionsByTime;
    severeImpactObj.currentlyInfected = severeImpactResult.currentlyInfected;
    severeImpactObj.infectionsByRequestedTime = severeImpactResult.InfectionsByTime;
    const output = {
        data: input,
        estimate: {
            impact: impactObj,
            severeImpact: severeImpactObj
        }
    };
    return (JSON.stringify(output));
};

export default covid19ImpactEstimator;

