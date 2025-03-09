"use client";
import { Newsletter } from "@/types/newsletters";
import { checkSubscriptionAccess } from "@/utils/checkSubscription";
import { UserWithSubscriptions } from '@/types/user';
import Image from 'next/image';
import { LiWrapper , Description, TopSection, Title} from './NewsletterItem.styles';
import Button from '../Button/Button';
 
interface NewsletterItemProps {
    newsletter: Newsletter;
    user: UserWithSubscriptions;
    isAboveTheFold?: boolean;
    isCurrentlyVisible?: boolean;  
}

const NewsletterItem =  
    ({ newsletter, user, isAboveTheFold = false, isCurrentlyVisible = false } : NewsletterItemProps) => {
        const hasAccess = checkSubscriptionAccess(newsletter, user);

        if (!newsletter) return null;

        return (
            <LiWrapper>
                <TopSection>
                    <Image
                        src={newsletter.image || '/assets/defaultimg.PNG'}
                        width={270}
                        height={201}
                        alt={`Image for ${newsletter.title}`}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 270px"
                        fetchPriority={isAboveTheFold ? "high" : "auto"}
                        loading={isAboveTheFold ? undefined : isCurrentlyVisible ? "eager" : "lazy"} // Updated to isCurrentlyVisible
                    />
                    <Title>{newsletter?.title}</Title>
                </TopSection>
                <Description>{newsletter.description}</Description>
                <Button title={hasAccess ? "S'inscrire" : "S'abonner"} status={hasAccess ? "subscribed" : "notsubscribed"} />
            </LiWrapper>
        );
    }
 

export default NewsletterItem;