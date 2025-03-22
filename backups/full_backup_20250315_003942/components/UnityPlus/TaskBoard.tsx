import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './TaskBoard.css';

interface TaskProps {
  id: string;
  title: string;
  description: string;
  sector: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reward: {
    amount: number;
    token: string;
  };
  deadline: string;
  status: 'open' | 'in-progress' | 'verification' | 'completed';
  assignedTo?: string;
}

interface UserProfileProps {
  nftId: string;
  followedSectors: string[];
  [key: string]: any;
}

interface TaskBoardProps {
  userProfile: UserProfileProps;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ userProfile }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [userTasks, setUserTasks] = useState<Record<string, 'in-progress' | 'verification'>>({});

  // Mock tasks data
  const tasks: TaskProps[] = [
    {
      id: 'task-1',
      title: t('unityPlus.tasks.task1.title', 'Community Health Survey'),
      description: t('unityPlus.tasks.task1.description', 'Conduct a survey of 50 local residents about healthcare access and satisfaction. Submit the anonymized data and a brief summary of findings.'),
      sector: 'Healthcare',
      difficulty: 'medium',
      reward: {
        amount: 150,
        token: 'BGL-HEALTH'
      },
      deadline: '2025-04-05',
      status: 'open'
    },
    {
      id: 'task-2',
      title: t('unityPlus.tasks.task2.title', 'Digital Literacy Workshop'),
      description: t('unityPlus.tasks.task2.description', 'Organize and conduct a workshop teaching basic digital skills to seniors. Document the event with photos and participant feedback.'),
      sector: 'Technology',
      difficulty: 'easy',
      reward: {
        amount: 100,
        token: 'BGL-TECH'
      },
      deadline: '2025-04-10',
      status: 'open'
    },
    {
      id: 'task-3',
      title: t('unityPlus.tasks.task3.title', 'Local Business Economic Report'),
      description: t('unityPlus.tasks.task3.description', 'Research and compile a report on the economic impact of recent policies on local small businesses. Include interviews with at least 5 business owners.'),
      sector: 'Economy',
      difficulty: 'hard',
      reward: {
        amount: 250,
        token: 'BGL'
      },
      deadline: '2025-04-15',
      status: 'open'
    },
    {
      id: 'task-4',
      title: t('unityPlus.tasks.task4.title', 'Public Park Cleanup Initiative'),
      description: t('unityPlus.tasks.task4.description', 'Organize a volunteer group to clean and maintain a local public park. Document before and after conditions and volunteer participation.'),
      sector: 'Environment',
      difficulty: 'easy',
      reward: {
        amount: 120,
        token: 'BGL'
      },
      deadline: '2025-03-30',
      status: 'open'
    }
  ];

  // Filter tasks based on active filter
  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'following') return userProfile.followedSectors.includes(task.sector);
    if (activeFilter === 'my-tasks') return userTasks[task.id] !== undefined;
    return true;
  });

  // Handle task application
  const applyForTask = (taskId: string) => {
    // In a real app, this would interact with a smart contract
    setUserTasks({
      ...userTasks,
      [taskId]: 'in-progress'
    });
    
    // Show success message
    alert(t('unityPlus.tasks.applySuccess', 'You have successfully applied for this task!'));
  };

  // Handle task submission
  const submitTask = (taskId: string) => {
    // In a real app, this would interact with a smart contract
    setUserTasks({
      ...userTasks,
      [taskId]: 'verification'
    });
    
    // Show success message
    alert(t('unityPlus.tasks.submitSuccess', 'Your task has been submitted for verification!'));
  };

  // Get difficulty class
  const getDifficultyClass = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="task-board">
      <div className="task-header">
        <h2>{t('unityPlus.tasks.title', 'Public Task Board')}</h2>
        <p>{t('unityPlus.tasks.description', 'Complete public service tasks to earn tokens and increase your PoC score.')}</p>
        
        <div className="task-filters">
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('unityPlus.tasks.filters.all', 'All Tasks')}
          </button>
          <button 
            className={`filter-button ${activeFilter === 'following' ? 'active' : ''}`}
            onClick={() => setActiveFilter('following')}
          >
            {t('unityPlus.tasks.filters.following', 'My Sectors')}
          </button>
          <button 
            className={`filter-button ${activeFilter === 'my-tasks' ? 'active' : ''}`}
            onClick={() => setActiveFilter('my-tasks')}
          >
            {t('unityPlus.tasks.filters.myTasks', 'My Tasks')}
          </button>
        </div>
      </div>

      <div className="tasks-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div key={task.id} className="task-card">
              <div className="task-header">
                <div className="task-sector">{task.sector}</div>
                <div className={`task-difficulty ${getDifficultyClass(task.difficulty)}`}>
                  {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
                </div>
              </div>
              
              <h3 className="task-title">{task.title}</h3>
              
              <div className="task-reward">
                <span className="reward-label">{t('unityPlus.tasks.reward', 'Reward')}:</span>
                <span className="reward-amount">{task.reward.amount} {task.reward.token}</span>
              </div>
              
              <div className="task-deadline">
                <span className="deadline-label">{t('unityPlus.tasks.deadline', 'Deadline')}:</span>
                <span className="deadline-date">{task.deadline}</span>
              </div>
              
              {selectedTask === task.id && (
                <div className="task-details">
                  <p className="task-description">{task.description}</p>
                </div>
              )}
              
              <div className="task-actions">
                <button 
                  className="details-button"
                  onClick={() => setSelectedTask(selectedTask === task.id ? null : task.id)}
                >
                  {selectedTask === task.id 
                    ? t('unityPlus.tasks.hideDetails', 'Hide Details') 
                    : t('unityPlus.tasks.viewDetails', 'View Details')}
                </button>
                
                {!userTasks[task.id] ? (
                  <button 
                    className="apply-button"
                    onClick={() => applyForTask(task.id)}
                  >
                    {t('unityPlus.tasks.apply', 'Apply for Task')}
                  </button>
                ) : userTasks[task.id] === 'in-progress' ? (
                  <button 
                    className="submit-button"
                    onClick={() => submitTask(task.id)}
                  >
                    {t('unityPlus.tasks.submit', 'Submit Task')}
                  </button>
                ) : (
                  <div className="verification-status">
                    {t('unityPlus.tasks.inVerification', 'In Verification')}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-tasks">
            <p>{t('unityPlus.tasks.noTasks', 'No tasks match your current filter.')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
