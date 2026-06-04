import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 360px;
  height: 550px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}20;
  padding: 4px 10px;
  border-radius: 20px;
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 6px;
`;

const Date = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -8px;
  border: 3px solid ${({ theme }) => theme.card};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  background: ${({ theme }) => theme.primary};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />

      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>

        <Date>{project.date}</Date>

        <Description>{project.description}</Description>
      </Details>

      {project.member?.length > 0 && (
        <Members>
          {project.member.map((member, index) => (
            <Avatar
              key={index}
              src={member.img}
              alt={member.name}
            />
          ))}
        </Members>
      )}

      <ButtonContainer>
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}

        {project.webapp && (
          <Button
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
      </ButtonContainer>
    </Card>
  );
};

export default ProjectCard;