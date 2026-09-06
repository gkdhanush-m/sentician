import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomePage from './page/Home/';
import CarrersPage from './page/Career';
import ApplyFormPage from './page/JobApply'
// import Chatbot from './components/Chatbot'
import DataAnalyticsServicePage from './page/Services/SoftwareSolution/DataAnalytics';
import CloudComputingServicePage from './page/Services/SoftwareSolution/CloudComputing';
import SoftwareDevelopmentServicePage from './page/Services/SoftwareSolution/SoftwareDevelopment';
import CyberSecurityServicePage from './page/Services/SoftwareSolution/CyberSecurity';
import TechInnovationServicePage from './page/Services/SoftwareSolution/TechInnovation';
import PermanentHiringServicePage from './page/Services/StaffingSolution/PermanentHiring';
import ContractualHiringServicePage from './page/Services/StaffingSolution/ContractualHiring';
import DEIHiringServicePage from './page/Services/StaffingSolution/DEIHiring';
import ExecutiveHiringServicePage from './page/Services/StaffingSolution/ExecutiveHiring';
import HireTrainDeployServicePage from './page/Services/StaffingSolution/HireTrainDeploy';
import InterviewAsAServicePage from './page/Services/StaffingSolution/InterviewAsAServices';
import BpoServicePage from './page/Services/OutsourcingServices/BpoService';
import RpoServicePage from './page/Services/OutsourcingServices/RpoService';
import HROperationsServicePage from './page/Services/OutsourcingServices/HROperationsServices';
import PayrollSupportServicesPage from './page/Services/OutsourcingServices/PayrollSupportServices';
import WorkforceManagementServicePage from './page/Services/OutsourcingServices/WorkforceManagementServices';
import GenerativeAiPage from './page/NugalaAiHub/GenerativeAi';
import LLMFineTuningPage from './page/NugalaAiHub/LLMFineTuning';
import ComputerVisionPage from './page/NugalaAiHub/ComputerVision';
import NaturalLanguageProcessingPage from './page/NugalaAiHub/NaturalLanguageProcessing';
import ConversationalAiPage from './page/NugalaAiHub/ConversationalAiPage';
import QuantumComputingPage from './page/NugalaAiHub/QuantumComputing';
import MachineLearningOperationsPage from './page/NugalaAiHub/MachineLearningOperations';

import { TheNugalaAdvantage, WhoWeAre } from './page/AboutUs';
import OurCulture from './page/AboutUs/OurCulture';
import ContactUsPage from './page/ContactUs';
import ColocationServicePage from './page/Services/OutsourcingServices/ColocationServices';
import ManagedITServicePage from './page/Services/OutsourcingServices/ManagedIT&HelpDeskServices';
import EnterpriseDataCenterServicePage from './page/Services/OutsourcingServices/EnterpriseDataCenterSolutions';



import InsightsPage from './page/Insights';
// SoftwareSolutions
import InsightAiEvolution from './page/Insights/SoftwareSolutions/InsightAiEvolution';
import InsightCustomSoftwareGrowth from './page/Insights/SoftwareSolutions/InsightCustomSoftwareGrowth';
import InsightCustomSoftwareROI from './page/Insights/SoftwareSolutions/InsightCustomSoftwareROI';
import InsightSaaSCloudPlatforms from './page/Insights/SoftwareSolutions/InsightSaaSCloudPlatforms';

// StaffingServices
import InsightStaffingDataAnalytics from './page/Insights/StaffingServices/InsightStaffingDataAnalytics';
import InsightOutsourcingvsInHouse from './page/Insights/StaffingServices/InsightOutsourcingvsInHouse';
import InsightTechTalentChallenges from './page/Insights/StaffingServices/InsightTechTalentChallenges';
import InsightFutureProofHiring from './page/Insights/StaffingServices/InsightFutureProofHiring';
import InsightContractVsPermanent from './page/Insights/StaffingServices/InsightContractVsPermanent';
import WhyPage from './page/WhyPage';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Nugala Software Solutions</title>
          <link rel="icon" type="image/png" href="/N-logo.png" />

        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<CarrersPage />} />
          <Route path="/apply/:jobCode" element={<ApplyFormPage />} />

          <Route path="/service/data-analytics" element={<DataAnalyticsServicePage />} />
          <Route path="/service/cloud-computing" element={<CloudComputingServicePage />} />
          <Route path="/service/software-development" element={<SoftwareDevelopmentServicePage />} />
          <Route path="/service/cyber-security" element={<CyberSecurityServicePage />} />
          <Route path="/service/tech-innovation" element={<TechInnovationServicePage />} />

          <Route path="/service/permanent-hiring" element={<PermanentHiringServicePage />} />
          <Route path="/service/contractual-hiring" element={<ContractualHiringServicePage />} />
          <Route path="/service/dei-hiring" element={<DEIHiringServicePage />} />
          <Route path="/service/executive-hiring" element={<ExecutiveHiringServicePage />} />
          <Route path="/service/hire-train-deploy" element={<HireTrainDeployServicePage />} />
          <Route path="/service/interview-as-a-service" element={<InterviewAsAServicePage />} />


          <Route path="/service/business-process-outsourcing" element={<BpoServicePage />} />
          <Route path="/service/recruitment-process-outsourcing" element={<RpoServicePage />} />
          <Route path="/service/hr-operations" element={<HROperationsServicePage />} />
          <Route path="/service/payroll-support" element={<PayrollSupportServicesPage />} />
          <Route path="/service/workforce-management" element={<WorkforceManagementServicePage />} />
          <Route path="/service/colocation" element={<ColocationServicePage />} />
          <Route path="/service/managed-IT-helpdesk-services" element={<ManagedITServicePage />} />
          <Route path="/service/enterprise-data-center-solutions" element={<EnterpriseDataCenterServicePage />} />

          <Route path="/nugala-ai-hub/generative-ai" element={<GenerativeAiPage />} />
          <Route path="/nugala-ai-hub/llm-fine-tuning" element={<LLMFineTuningPage />} />
          <Route path="/nugala-ai-hub/computer-vision" element={<ComputerVisionPage />} />
          <Route path="/nugala-ai-hub/natural-language-processing" element={<NaturalLanguageProcessingPage />} />
          <Route path="/nugala-ai-hub/conversational-ai" element={<ConversationalAiPage />} />
          <Route path="/nugala-ai-hub/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/nugala-ai-hub/machine-learning-operations" element={<MachineLearningOperationsPage />} />

          <Route path="/insight/ai-evolution" element={<InsightAiEvolution />} />
          <Route path="/insight/staffing-data-analytics" element={<InsightStaffingDataAnalytics />} />
          <Route path="/insight/outsourcing-vs-inhouse" element={<InsightOutsourcingvsInHouse />} />
          <Route path="/insight/tech-talent-challenges-india" element={<InsightTechTalentChallenges />} />
          <Route path="/insight/custom-software-roi" element={<InsightCustomSoftwareROI />} />
          <Route path="/insight/future-proof-hiring" element={<InsightFutureProofHiring />} />
          <Route path="/insight/saas-cloud-technology" element={<InsightSaaSCloudPlatforms />} />
          <Route path="/insight/contract-vs-permanent-hiring" element={<InsightContractVsPermanent />} />
          <Route path="/insight/custom-software-growth" element={<InsightCustomSoftwareGrowth />} />

          <Route path="/about-us/the-nugala-advantage" element={<TheNugalaAdvantage />} />
          <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
          <Route path="/about-us/our-culture" element={<OurCulture />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/why" element={<WhyPage />} />

        </Routes>
        {/* <Chatbot /> */}
      </Router>
    </HelmetProvider>
  );
}

export default App;
